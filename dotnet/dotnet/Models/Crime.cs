using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CsvHelper.Configuration.Attributes;

namespace dotnet.Models
{
    public class Crime
    {
        [Name("CATEGORIE")]
        public string Categorie { get; set; }

        [Name("DATE")]
        public DateTime Date { get; set; }

        [Name("QUART")]
        public string Quart { get; set; }

        [Name("PDQ")]
        public int Pdq { get; set; }

        [Name("X")]
        public float X { get; set; }

        [Name("Y")]
        public float Y { get; set; }

        [Name("LONGITUDE")]
        public float Longitude { get; set; }

        [Name("LATITUDE")]
        public float Latitude { get; set; }
}
}
