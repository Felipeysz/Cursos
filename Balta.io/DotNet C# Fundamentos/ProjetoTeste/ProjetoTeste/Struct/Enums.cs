using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TesteStruct
{
    internal class Concessionaria2
    {
        static void Main(string[] args)
        {
            var Carro = new MontadoraCarro2("Tesla", "X", 2023, 65000,EModelCarro.Produto);
            var TrocarRodas = new MontadoraCarro2("Roda 22Plg", "Blindada", 2023, 250, EModelCarro.Servico);

            Console.WriteLine("Name:" + Carro.Name + " " + "Model:" + Carro.Model + " " + "Year:" + Carro.Year + " " + "Price:" + Carro.Price + "$" + " " + "Preço em real:" + Carro.PriceInReal());
        }
    }

    struct MontadoraCarro2
    {
        public MontadoraCarro2(string name, string model, int year, double price, EModelCarro type)
        {
            //Name Em Maiusculo Aqui
            Name = name;
            Model = model;
            Year = year;
            Price = price;
            Type = type;
        }
        
        //O Nome do Public Deve ser O Mesmo que A Declaração no Public MontadoraCarro2
        public string Name;//Name Aqui
        public string Model;
        public int Year;
        public double Price;
        public EModelCarro Type;

        public double PriceInReal()
        {
            double real = 4.90;
            return Price * real;
        }
    }

    enum EModelCarro
    {
        Produto = 1,
        Servico = 2
    }
    
}
