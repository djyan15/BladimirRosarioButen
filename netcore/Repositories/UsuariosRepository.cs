using System.Collections.Generic;
using netcore.Model;
using netcore.Interfaces;
namespace netcore.Repositories
{

    public  class UsuariosRepository: IRepository
    {
     private readonly EmpresaContext _context;
     public UsuariosRepository(EmpresaContext context)
     {
         _context = context;
         
     }

     public IEnumerable<Usuarios> GetUsuarios() {
        return _context.Usuarios;
     }

     public void Add(Usuarios usuario) {
         _context.Usuarios.Add(usuario);
         _context.SaveChanges();
     }

     public IEnumerable<Departamentos> GetDepartamentos() {
         return _context.Departamentos;
     }
 
    }

}