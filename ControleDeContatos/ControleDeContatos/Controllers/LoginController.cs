﻿using ControleDeContatos.Helper;
using ControleDeContatos.Models;
using ControleDeContatos.Repositorio;
using Microsoft.AspNetCore.Mvc;

namespace ControleDeContatos.Controllers
{
    
    public class LoginController : Controller
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        private readonly ISessao _sessao;
        private readonly IEmail _email;
        public LoginController(IUsuarioRepositorio usuarioRepositorio, ISessao sessao, IEmail email)
        {
            _usuarioRepositorio = usuarioRepositorio;
            _sessao = sessao;
            _email = email;
        }
        public IActionResult Index()
        {
            if (_sessao.BuscarSessaoDoUsuario() != null) return RedirectToAction("Index", "Home");
            return View();
        }

        public IActionResult RedefinirSenha()
        {
            return View();
        }

        public IActionResult Sair()
        {
            _sessao.RemoverSessaoUsuario();

            return RedirectToAction("Index", "Login");
        }

        [HttpPost]
        public IActionResult Entrar(LoginModel loginModel)
        {
            try
            {
                if(ModelState.IsValid)
                {
                    UsuarioModel usuario = _usuarioRepositorio.BuscarPorLogin(loginModel.Login);

                    if(usuario != null)
                    {
                        if (usuario.SenhaValida(loginModel.Senha))
                        {
                            _sessao.CriarSessaoDoUsuario(usuario);
                            return RedirectToAction("Index", "Home");
                        }

                        TempData["MensagemErro"] = $"Senha do Usuario é inválida. Por favor ,tente novamente.";
                    }

                    TempData["MensagemErro"] = $"Usuario e/ou senha inválido(s). Por favor ,tente novamente.";
                }
                return View("Index");
            }
            catch (System.Exception erro)
            {

                TempData["MensagemErro"] = $"Ops, Não Conseguimos Realizar Seu Login, Mais Detalhes do Erro: {erro.Message}";
                return RedirectToAction("Index");
            }

        }
        [HttpPost]
        public IActionResult EnviarLinkParaRedefinirSenha (RedefinirSenhaModel redefinirSenhaModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UsuarioModel usuario = _usuarioRepositorio.BuscarPorEmailELogin(redefinirSenhaModel.Email, redefinirSenhaModel.Login);

                    if (usuario != null)
                    {
                        string novaSenha = usuario.GerarNovaSenha();
                        string mensagem = $"Sua Nova Senha é: {novaSenha}";

                        bool emailEnviado = _email.Enviar(usuario.Email,"Sistema de Contatos - Nova Senha",mensagem);

                        if(emailEnviado)
                        {
                            _usuarioRepositorio.Atualizar(usuario);
                            TempData["MensagemSucesso"] = $"Enviamos Para o Seu Email Cadastrado uma nova Senha";
                        }
                        else
                        {
                            TempData["MensagemErro"] = $"Não Conseguimos Enviar O E-mail. Por Favor, Tente Novamente";
                        }
                        return RedirectToAction("Index", "Login");
                    }

                    TempData["MensagemErro"] = $"Não Conseguimos Redefinir Sua Senha. Por Favor, Verifique os Dados informados";
                }
                return View("Index");
            }
            catch (System.Exception erro)
            {

                TempData["MensagemErro"] = $"Ops, Não Conseguimos Redefinir Sua Senha Tente Novamente, Mais Detalhes do Erro: {erro.Message}";
                return RedirectToAction("Index");
            }
        }
    }
}
