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

        public CrimesController(CrimesService crimesService)
        {
            _crimesService = crimesService;
        }

        // GET api/crimes
        [HttpGet]
        public ActionResult<IEnumerable<Position>> Get()
        {
            return _crimesService.Crimes
                .Select(x => new Position { Lng = x.Longitude, Lat = x.Latitude })
                .ToList();
        }

        // GET api/crimes/{year}/{month}
        [HttpGet("{year}/{month}")]
        public ActionResult<IEnumerable<Position>> Get(int year, int month)
        {
            return _crimesService.Crimes
                .Where(x => x.Date.Year == year && x.Date.Month == month)
                .Select(x => new Position { Lng = x.Longitude, Lat = x.Latitude })
                .ToList();
        }

        // GET api/crimes/{year}
        [HttpGet("{year}")]
        public ActionResult<IEnumerable<Position>> Get(int year)
        {
            return _crimesService.Crimes
                .Where(x => x.Date.Year == year)
                .Select(x => new Position { Lng = x.Longitude, Lat = x.Latitude })
                .ToList();
        }
    }
}
