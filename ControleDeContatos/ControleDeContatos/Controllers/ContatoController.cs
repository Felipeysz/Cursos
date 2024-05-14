using ControleDeContatos.Filters;
using ControleDeContatos.Helper;
using ControleDeContatos.Models;
using ControleDeContatos.Repositorio;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ControleDeContatos.Controllers
{
    [PaginaParaUsuarioLogado]
    public class ContatoController : Controller
    {
        private readonly IContatoRepositorio _contatoRepositorio;
        private readonly ISessao _sessao;
        public ContatoController(IContatoRepositorio contatoRepositorio,
            ISessao sessao)
        {
            _contatoRepositorio = contatoRepositorio;
            _sessao = sessao;
        }
        public IActionResult Index()
        {
            UsuarioModel usuarioLogado = _sessao.BuscarSessaoDoUsuario();
            List<ContatoModel> contatos = _contatoRepositorio.BuscarTodos(usuarioLogado.Id);

            return View(contatos);
        }
        public IActionResult Criar()
        {
            return View();
        }

        public IActionResult Editar(int id)
        {
            ContatoModel contato = _contatoRepositorio.ListarPorId(id);
            return View(contato);
        }
        public IActionResult ApagarConfirmacao(int id)
        {
            ContatoModel contato = _contatoRepositorio.ListarPorId(id);
            return View(contato);
        }

        public IActionResult Apagar(int id)
        {
            try
            {
                bool apagado = _contatoRepositorio.Apagar(id);

                if (apagado)
                {
                    TempData["MensagemSucesso"] = "Contato Apagado com Sucesso!";
                }
                else
                {
                    TempData["MensagemErro"] = "Ops, Não Conseguimos Apagar Seu Contato!";
                }
                return RedirectToAction("Index");
            }
            catch (System.Exception erro)
            {

                TempData["MensagemErro"] = $"Ops, Não Conseguimos Apagar Seu Contato, Mais Detalhes do Erro: {erro.Message}";
                return RedirectToAction("Index");
            }
        }

        [HttpPost]
        public IActionResult Criar(ContatoModel contato)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UsuarioModel usuarioLogado = _sessao.BuscarSessaoDoUsuario();
                    contato.UsuarioId = usuarioLogado.Id;
                    contato = _contatoRepositorio.Adicionar(contato);
                    TempData["MensagemSucesso"] = "Contato Cadastrado com Sucesso!";
                    return RedirectToAction("Index");
                }
                return View(contato);

            }
            catch (System.Exception erro)
            {

                TempData["MensagemErro"] = $"Ops, Não Conseguimos Cadastrar Seu Contato, Tente Novamente, Detalhe do Erro:{erro.Message}";
                return RedirectToAction("Index");
            }
        }

        [HttpPost]
        public IActionResult Alterar(ContatoModel contato)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UsuarioModel usuarioLogado = _sessao.BuscarSessaoDoUsuario();
                    contato.UsuarioId = usuarioLogado.Id;
                    _contatoRepositorio.Atualizar(contato);
                    TempData["MensagemSucesso"] = "Contato Alterado com Sucesso!";
                    return RedirectToAction("Index");
                }

                return View("Editar", contato);
            }
            catch (System.Exception erro)
            {

                if (ModelState.IsValid)
                {
                    TempData["MensagemErro"] = $"Ops, Não Conseguimos Atualizar Seu Contato, Tente Novamente, Detalhe do Erro:{erro.Message}";
                    return RedirectToAction("Index");
                }

                return View("Editar", contato);
            }
        }
    }
}
