using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CsvHelper;
using dotnet.Models;

namespace dotnet.Services
{
    public class CrimesService
    {
        private List<string> _values;

        public CrimesService()
        {
            using (var reader = new StreamReader("interventionscitoyendo.csv"))
            {
                using (var csv = new CsvReader(reader))
                {
                    var records = csv.GetRecords<Crime>();
                }
            }
            _values = new List<string>() { "a", "l", "l", "o" };
        }

        public List<string> GetValues()
        {
            return _values;
        }
    }
}
