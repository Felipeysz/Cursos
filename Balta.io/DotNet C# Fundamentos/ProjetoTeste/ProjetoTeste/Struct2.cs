using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TesteStruct
{
    internal class Concessionaria
    {
        static void Main12(string[] args)
        {
            var Carro = new MontadoraCarro("Tesla", "X", 2023, 70000);

            Console.WriteLine("Name:" + Carro.Name + " " + "Model:" + Carro.Model + " " + "Year:" + Carro.Year + " " +"Price:" + Carro.Price + "$" + " " +"Preço em real:" + Carro.PriceInReal());
        }
    }

    struct MontadoraCarro{
        public MontadoraCarro(string name,string model,int year,double price)
        {
            Name = name;
            Model = model;
            Year = year;
            Price = price;
        }

        public string Name;
        public string Model;
        public int Year;
        public double Price;

        public double PriceInReal()
        {
            double real = 4.90;
            return Price * real;
        }
    }
}
