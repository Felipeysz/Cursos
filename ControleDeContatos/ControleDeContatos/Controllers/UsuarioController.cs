using ControleDeContatos.Filters;
using ControleDeContatos.Models;
using ControleDeContatos.Repositorio;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ControleDeContatos.Controllers
{
    [PaginaRestritaSomenteAdmin]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        private readonly IContatoRepositorio _contatoRepositorio;
        public UsuarioController(IUsuarioRepositorio usuarioRepositorio , IContatoRepositorio contatoRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
            _contatoRepositorio = contatoRepositorio;
        }
        public IActionResult Index()
        {
            List<UsuarioModel> usuario = _usuarioRepositorio.BuscarTodos();

            return View(usuario);
        }
        public IActionResult Criar()
        {
            return View();
        }
        public IActionResult Editar(int id)
        {
            UsuarioModel usuario = _usuarioRepositorio.BuscarPorID(id);
            return View(usuario);
        }
        public IActionResult ApagarConfirmacao(int id)
        {
            UsuarioModel usuario = _usuarioRepositorio.BuscarPorID(id);
            return View(usuario);
        }
        public IActionResult Apagar(int id)
        {
            try
            {
                bool apagado = _usuarioRepositorio.Apagar(id);

                if (apagado)
                {
                    TempData["MensagemSucesso"] = "Usuario Apagado com Sucesso!";
                }
                else
                {
                    TempData["MensagemErro"] = "Ops, Não Conseguimos Apagar Seu Usuario!";
                }
                return RedirectToAction("Index");
            }
            catch (System.Exception erro)
            {

                TempData["MensagemErro"] = $"Ops, Não Conseguimos Apagar Seu Usuario, Mais Detalhes do Erro: {erro.Message}";
                return RedirectToAction("Index");
            }
        }

        public IActionResult ListarContatosPorUsuarioId(int id)
        {
            List<ContatoModel> contatos = _contatoRepositorio.BuscarTodos(id);
            return PartialView("_ContatosUsuario", contatos);
        }

        [HttpPost]
        public IActionResult Criar(UsuarioModel usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    usuario = _usuarioRepositorio.Adicionar(usuario);
                    TempData["MensagemSucesso"] = "Usuario Cadastrado com Sucesso!";
                    return RedirectToAction("Index");
                }
                return View(usuario);

            }
            catch (System.Exception erro)
            {

                TempData["MensagemErro"] = $"Ops, Não Conseguimos Cadastrar Seu Usuario, Tente Novamente, Detalhe do Erro:{erro.Message}";
                return RedirectToAction("Index");
            }
        }

        [HttpPost]
        public IActionResult Alterar(UsuarioSemSenhaModel usuarioSemSenhaModel)
        {
            try
            {
                UsuarioModel usuario = null;

                if (ModelState.IsValid)
                {
                    usuario = new UsuarioModel()
                    {
                        Id = usuarioSemSenhaModel.Id,
                        Nome = usuarioSemSenhaModel.Nome,
                        Login = usuarioSemSenhaModel.Login,
                        Email = usuarioSemSenhaModel.Email,
                        Perfil = usuarioSemSenhaModel.Perfil
                    };
                    usuario = _usuarioRepositorio.Atualizar(usuario);
                    TempData["MensagemSucesso"] = "Usuario Alterado com Sucesso!";
                    return RedirectToAction("Index");
                }

                return View("Editar", usuario);
            }
            catch (System.Exception erro)
            {

                if (ModelState.IsValid)
                {
                    TempData["MensagemErro"] = $"Ops, Não Conseguimos Atualizar Seu Usuario, Tente Novamente, Detalhe do Erro:{erro.Message}";
                    return RedirectToAction("Index");
                }
                return RedirectToAction("Index");
            }
        }
    }
}
