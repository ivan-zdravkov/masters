using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
  [ApiController]
  public class ExperimentsController : ControllerBase
  {
    [HttpGet]
    [Route("api/experiments/names")]
    public ActionResult<IEnumerable<string>> Names()
    {
      DirectoryInfo experimentalDataDirectory = new DirectoryInfo("../../ExperimentalData");

      IEnumerable<string> experimentNames = experimentalDataDirectory
        .GetDirectories()
        .Take(20)
        .Select(di => di.Name)
        .ToList();

      return new ActionResult<IEnumerable<string>>(experimentNames);
    }
  }
}
