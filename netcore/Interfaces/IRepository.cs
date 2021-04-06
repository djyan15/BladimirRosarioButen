using System.Collections.Generic;
using netcore.Model;

namespace netcore.Interfaces
{
    public interface IRepository
    {
        IEnumerable<Usuarios> GetUsuarios();
        void Add(Usuarios usuario);
        IEnumerable<Departamentos> GetDepartamentos();

    }
}