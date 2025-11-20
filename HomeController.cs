using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Calculate(int firstNumber, int secondNumber, string operation)
    {
        try
        {
            int result = operation switch
            {
                "+" => firstNumber + secondNumber,
                "-" => firstNumber - secondNumber,
                "*" => firstNumber * secondNumber,
                "/" => secondNumber == 0 ? throw new DivideByZeroException("Division by zero") : firstNumber / secondNumber,
                _ => throw new ArgumentException("Invalid operation")
            };

            ViewBag.Result = $"{firstNumber} {operation} {secondNumber} = {result}";
        }
        catch (Exception ex)
        {
            ViewBag.Error = ex.Message;
        }

        return View("Index");
    }
}