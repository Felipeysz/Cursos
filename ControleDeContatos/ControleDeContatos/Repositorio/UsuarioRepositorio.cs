using ControleDeContatos.Data;
using ControleDeContatos.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ControleDeContatos.Repositorio
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly BancoContext _bancoContext;

        public UsuarioRepositorio(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
        }
        public UsuarioModel BuscarPorLogin(string login)
        {
            return _bancoContext.Usuarios.FirstOrDefault(x => x.Login.ToUpper() == login.ToUpper());
        }

        public UsuarioModel BuscarPorEmailELogin(string email, string login)
        {
            return _bancoContext.Usuarios.FirstOrDefault(x => x.Email.ToUpper() == email.ToUpper() && x.Login.ToUpper() == login.ToUpper());
        }

        public UsuarioModel BuscarPorID(int id)
        {
            return _bancoContext.Usuarios.FirstOrDefault(x => x.Id == id);
        }

        public List<UsuarioModel> BuscarTodos()
        {
            return _bancoContext.Usuarios
                .Include(x => x.Contatos)
                .ToList();
        }

        public UsuarioModel Adicionar(UsuarioModel usuario)
        {
            usuario.DataCadastro = DateTime.Now;
            usuario.SetSenhaHash();
            _bancoContext.Usuarios.Add(usuario);
            _bancoContext.SaveChanges();

            return usuario;
        }


        public UsuarioModel Atualizar(UsuarioModel usuario)
        {
            UsuarioModel usuarioDB = BuscarPorID(usuario.Id);

            if (usuarioDB == null) throw new System.Exception("Houve Um Erro Na Atualização do Usuario");

            usuarioDB.Nome = usuario.Nome;
            usuarioDB.Email = usuario.Email;
            usuarioDB.Login = usuario.Login;
            usuarioDB.Perfil = usuario.Perfil;
            usuarioDB.DataAtualizacao = DateTime.Now;

            _bancoContext.Usuarios.Update(usuarioDB);
            _bancoContext.SaveChanges();
            return usuarioDB;
        }
        public UsuarioModel AlterarSenha(AlterarSenhaModel alterarSenhaModel)
        {
            UsuarioModel usuarioDB = BuscarPorID(alterarSenhaModel.Id);

            if (usuarioDB == null) throw new Exception("House um error na Atualização da senha, usuario não encontrado");

            if (!usuarioDB.SenhaValida(alterarSenhaModel.SenhaAtual)) throw new Exception("Senha Atual Não Confere!");

            if (usuarioDB.SenhaValida(alterarSenhaModel.NovaSenha)) throw new Exception("Nova Senha deve ser Diferente da Senha Atual");

            usuarioDB.SetNovaSenha(alterarSenhaModel.NovaSenha);
            usuarioDB.DataAtualizacao = DateTime.Now;

            _bancoContext.Usuarios.Update(usuarioDB);
            _bancoContext.SaveChanges();

            return usuarioDB;
        }

        public bool Apagar(int id)
        {
            UsuarioModel usuarioDB = BuscarPorID(id);

            if (usuarioDB == null) throw new System.Exception("Houve Um Erro Na Deleção do Usuario");

            _bancoContext.Usuarios.Remove(usuarioDB);
            _bancoContext.SaveChanges();
            return true;
        }
    }
}
