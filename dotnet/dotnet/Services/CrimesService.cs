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
        public List<Crime> Crimes { get; }

        public CrimesService()
        {
            using (var reader = new StreamReader("interventionscitoyendo.csv", Encoding.GetEncoding("ISO-8859-1")))
            {
                using (var csv = new CsvReader(reader))
                {
                    Crimes = new List<Crime>();
                    while (csv.Read())
                    {
                        try
                        {
                            var record = csv.GetRecord<Crime>();
                            if (Math.Abs(record.Latitude - 1) > float.Epsilon && 
                                Math.Abs(record.Longitude - 1) > float.Epsilon)
                            {
                                Crimes.Add(record);
                            }
                        }
                        catch
                        {
                            // ignored
                        }

                    }
                }
            }
        }
    }
}
