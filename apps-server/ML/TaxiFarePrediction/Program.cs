using System;
using System.IO;
using Microsoft.ML;
using Microsoft.ML.Data;

namespace TaxiFarePrediction
{
    internal static class Program
    {
        private static string BaseDatasetsRelativePath = @"../../../../Data";
        private static string TrainDataRelativePath = $"{BaseDatasetsRelativePath}/taxi-fare-train.csv";
        private static string TestDataRelativePath = $"{BaseDatasetsRelativePath}/taxi-fare-test.csv";

        private static string TrainDataPath = GetAbsolutePath(TrainDataRelativePath);
        private static string TestDataPath = GetAbsolutePath(TestDataRelativePath);

        private static string BaseModelsRelativePath = @"../../../../MLModels";
        private static string ModelRelativePath = $"{BaseModelsRelativePath}/MLModel.zip";

        private static string ModelPath = GetAbsolutePath(ModelRelativePath);

        static void Main(string[] args)
        {
            //1. Initialize ML.NET environment
            MLContext mlContext = new MLContext(seed: 0);

            // 2. Load training data
            IDataView trainData = mlContext.Data.LoadFromTextFile<ModelInput>(
                TrainDataPath, separatorChar: ',', hasHeader: true
                );

            // 2. Load data from postgreSQL
            string connectionString = @;
            string commandText = "SELECT * FROM iris";


            // 3. Add data transformations
            var dataProcessPipeLine = mlContext.Transforms.Categorical.OneHotEncoding(outputColumnName: "PaymentTypeEncoded", "PaymentType")
                .Append(mlContext.Transforms.Concatenate(outputColumnName: "Features", "PaymentTypeEncoded", "PassengerCount", "TripTime", "TripDistance"));

            // 4. Add algorithm
            //var trainer = mlContext.Regression.Trainers.LightGbm(labelColumnName: "FareAmount", featureColumnName: "Features");
            var trainer = mlContext.Regression.Trainers.Sdca(labelColumnName: "FareAmount", featureColumnName: "Features");
            var trainingPipeLine = dataProcessPipeLine.Append(trainer);

            // 5. Train model
            Console.WriteLine("=============== Training the model ===============");
            var model = trainingPipeLine.Fit(trainData);

            // 6. Evaluate model on test data
            Console.WriteLine("===== Evaluating Model's accuracy with Test data =====");

            IDataView testData = mlContext.Data.LoadFromTextFile<ModelInput>(
                TestDataPath, separatorChar: ',', hasHeader: true
                );

            IDataView predictions = model.Transform(testData);
            var metrics = mlContext.Regression.Evaluate(predictions, "FareAmount");
            Console.WriteLine($"Model Quality" +
                $" ( RSquared) : { metrics.RSquared}");

            // 7. Predict on sample data and print results
            var input = new ModelInput
            {
                PassengerCount = 2,
                TripDistance = 4,
                TripTime = 1150,
                PaymentType = "CRD"
            };

            var result = mlContext.Model.CreatePredictionEngine<ModelInput, ModelOutput>(model).Predict(input);
            Console.WriteLine($"Predicted fare: " +
                $"{result.FareAmount}");

            // Save trained model
            mlContext.Model.Save(model, trainData.Schema, ModelPath);

            Console.WriteLine("Press any key to exit..");
            Console.ReadLine();
        }

        private static string GetAbsolutePath(string relativePath)
        {
            FileInfo _dataRoot = new FileInfo(typeof(Program).Assembly.Location);
            string assemblyFolderPath = _dataRoot.Directory.FullName;

            string fullPath = Path.Combine(assemblyFolderPath, relativePath);

            return fullPath;
        }

    }
}
