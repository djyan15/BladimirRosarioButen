
using netcore.Model;
using netcore.Repositories;
using netcore.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace netcore.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IRepository _usuariosServices;
        public UsuariosController(IRepository usuariosServices)
        {
            _usuariosServices = usuariosServices;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var usuarios = _usuariosServices.GetUsuarios();
            return Ok(usuarios);
        }
        [HttpGet("{departamentos}")]
        public IActionResult GetDepartamentos()
        {
            var departamentos = _usuariosServices.GetDepartamentos();
            return Ok(departamentos);
        }
        [HttpPost]
        public IActionResult Post(Usuarios usuario)
        {
            _usuariosServices.Add(usuario);
            return Ok();
        }
    }
}