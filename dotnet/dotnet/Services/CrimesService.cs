using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CsvHelper;
using dotnet.Models;

namespace dotnet.Services
{
    public class CrimesService
    {
        private List<Crime> _crimes;

        public CrimesService()
        {
            using (var reader = new StreamReader("interventionscitoyendo.csv", Encoding.GetEncoding("ISO-8859-1")))
            {
                using (var csv = new CsvReader(reader))
                {
                    _crimes = new List<Crime>();
                    while (csv.Read())
                    {
                        try
                        {
                            var record = csv.GetRecord<Crime>();
                            _crimes.Add(record);
                        }
                        catch
                        {
                            // ignored
                        }

                    }
                }
            }
        }

        public List<Crime> GetValues()
        {
            return _crimes;
        }
    }
}
