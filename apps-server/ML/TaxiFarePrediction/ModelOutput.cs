using Microsoft.ML.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiFarePrediction
{
    class ModelOutput
    {
        [ColumnName("Score")]
        public float FareAmount;

    }
}
