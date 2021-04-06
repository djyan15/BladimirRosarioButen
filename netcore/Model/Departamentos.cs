using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace netcore.Model
{
    public partial class Departamentos
    {
        public Departamentos()
        {
            Usuarios = new HashSet<Usuarios>();
        }

        public int IdDepartamento { get; set; }
        public string Nombre { get; set; }
        public string Codigo { get; set; }

        public virtual ICollection<Usuarios> Usuarios { get; set; }
    }
}
