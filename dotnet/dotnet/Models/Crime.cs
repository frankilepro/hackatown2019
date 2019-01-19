using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet.Models
{
    public class Crime
    {
        public string CATEGORIE { get; set; }
        public DateTime DATE { get; set; }
        public string QUART { get; set; }
        public int PDQ { get; set; }
        public float X { get; set; }
        public float Y { get; set; }
        public float LONGITUDE { get; set; }
        public float LATITUDE { get; set; }
}
}
