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

    [HttpGet]
    [Route("api/experiments/json/{experiment}/{type}")]
    public ActionResult<string> Json2D(string experiment, string type)
    {
      DirectoryInfo jsonDirectory = new DirectoryInfo($"../../ExperimentalData/{experiment}/");

      string fileName = $"Result{type}.json";

      using (StreamReader r = new StreamReader(jsonDirectory + fileName))
      {
        string json = r.ReadToEnd();

        return new ActionResult<string>(json);
      }
    }
  }
}
