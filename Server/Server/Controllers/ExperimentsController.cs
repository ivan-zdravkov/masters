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
    public ActionResult<string> Json(string experiment, string type)
    {
      DirectoryInfo jsonDirectory = new DirectoryInfo($"../../ExperimentalData/{experiment}/");

      string fileName = $"Result{type}.json";

      using (StreamReader r = new StreamReader(jsonDirectory + fileName))
      {
        string json = r.ReadToEnd();

        return new ActionResult<string>(json);
      }
    }

    [HttpGet]
    [Route("api/experiments/images/{experiment}")]
    public ActionResult<IEnumerable<string>> Images(string experiment)
    {
      DirectoryInfo directory = new DirectoryInfo($"../../ExperimentalData/{experiment}/");

      string[] filePaths = Directory.GetFiles(directory.FullName, "*.jpeg");

      List<string> results = new List<string>();

      foreach (string filePath in filePaths)
      {
        Byte[] bytes = System.IO.File.ReadAllBytes(filePath);

        results.Add(Convert.ToBase64String(bytes));
      }

      return results;
    }

    [HttpGet]
    [Route("api/experiments/images/{experiment}/{type}")]
    public ActionResult<string> Images(string experiment, string type)
    {
      DirectoryInfo jsonDirectory = new DirectoryInfo($"../../ExperimentalData/{experiment}/{type}");

      string fileName = $"Result{type}.json";

      using (StreamReader r = new StreamReader(jsonDirectory + fileName))
      {
        string json = r.ReadToEnd();

        return new ActionResult<string>(json);
      }
    }
  }
}
