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

        // GET api/values
        [HttpGet("{year}/{month}")]
        public ActionResult<IEnumerable<Position>> Get(int year, int month)
        {
            return _crimesService.Crimes
                .Where(x => x.Date.Year == year && x.Date.Month == month)
                .Select(x => new Position { Lng = x.Longitude, Lat = x.Latitude })
                .ToList();
        }
    }
}
