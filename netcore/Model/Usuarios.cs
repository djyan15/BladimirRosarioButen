using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace netcore.Model
{
    public partial class Usuarios
    {
        public int IdUsuario { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Genero { get; set; }
        public string Cedula { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public int IdDepartamento { get; set; }
        public string Cargo { get; set; }
        public string SupervisorInmediato { get; set; }

        public virtual Departamentos IdDepartamentoNavigation { get; set; }
    }
}
