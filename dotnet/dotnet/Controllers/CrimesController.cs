using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet.Models;
using dotnet.Services;
using Microsoft.AspNetCore.Mvc;

namespace dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrimesController : ControllerBase
    {
        private readonly CrimesService _crimesService;
        private readonly Dictionary<string, int> _converter;

        public CrimesController(CrimesService crimesService)
        {
            _crimesService = crimesService;
            _converter = new Dictionary<string, int>()
            {
                { "Vol de véhicule à moteur", 0 },
                { "Vols qualifiés", 1 },
                { "Introduction", 2 },
                { "Méfait", 3 },
                { "Vol dans / sur véhicule à moteur", 4 },
                { "Infractions entrainant la mort", 5 }
            };
        }

        // GET api/crimes
        [HttpGet]
        public ActionResult<IEnumerable<Item>> Get()
        {
            return _crimesService.Crimes
                .Select(x => new Item
                {
                    Lng = x.Longitude,
                    Lat = x.Latitude,
                    Type = _converter[x.Categorie]
                })
                .ToList();
        }

        // GET api/crimes/{year}/{month}
        [HttpGet("{year}/{month}")]
        public ActionResult<IEnumerable<Item>> Get(int year, int month)
        {
            return _crimesService.Crimes
                .Where(x => x.Date.Year == year && x.Date.Month == month)
                .Select(x => new Item
                {
                    Lng = x.Longitude,
                    Lat = x.Latitude,
                    Type = _converter[x.Categorie]
                })
                .ToList();
        }

        // GET api/crimes/{year}
        [HttpGet("{year}")]
        public ActionResult<IEnumerable<Item>> Get(int year)
        {
            return _crimesService.Crimes
                .Where(x => x.Date.Year == year)
                .Select(x => new Item
                {
                    Lng = x.Longitude,
                    Lat = x.Latitude,
                    Type = _converter[x.Categorie]
                })
                .ToList();
        }
    }
}
