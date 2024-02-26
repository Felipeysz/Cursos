using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AulaString
{
    internal class Interpolação
    {
        static void Main1(string[] args)
        {
            var price = 10.20;
            var pricePromotion = 7.80;
            var texto = "O Preço do Produto é: " + price;
            //var texto2 = "O Preço o Preço do Produto é " + pricePromotion + " apenas na promoção e " + price + " em dias normais";
            var texto2 = String.Format("O Preço do Produto é {0} Apenas Na Promoção e {1} Em Dias Normais", pricePromotion,price);

            //var texto3 = "O Preço o Preço do Produto é " + price + " apenas na promoção e " + pricePromotion + " em dias normais";
            var texto3 = String.Format("O Preço do Produto é {1} Apenas Na Promoção e {0} Em Dias Normais", pricePromotion, price);

            var texto4 = $"O preço do produto é {price}";

            var texto5 = $"O preço \n do produto é {price}";

            var texto6 = $@"O preço " +
                $"do produto é {price}";

            Console.WriteLine(texto);
        }
    }
}
