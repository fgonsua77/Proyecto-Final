package nando.proyect.entornoServidor.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import nando.proyect.entornoServidor.model.Carta;
import nando.proyect.entornoServidor.model.Perfil;
import nando.proyect.entornoServidor.model.Usuarios;
import nando.proyect.entornoServidor.service.IServiceUsuario;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", methods = { RequestMethod.GET, RequestMethod.POST,
        RequestMethod.OPTIONS })
@RequestMapping("/apiuser")

public class UsuarioRESTController {
    @Autowired
    private IServiceUsuario usuarioService;


    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuarios>> encontrarTodas() {
        return ResponseEntity.ok().body(usuarioService.encontrarTodoslosUsuarios());
    }

    @GetMapping("/usuarios/getuser/userid={id}")
    public Usuarios encontrarUnUsuario(@PathVariable("id") Integer id) {
        return usuarioService.encontrarUsuarioPorId(id);
    }
    @GetMapping("/usuarios/getuser/email={email}")
    public Usuarios encontrarUnUsuarioPorEmail(@PathVariable("email") String email) {
        return usuarioService.encontrarUsuarioPorEmail(email);
    }
    @GetMapping("/usuarios/getuser/username={username}")
    public Usuarios encontrarUnUsuarioPorNombreUsuario(@PathVariable("username") String username) {
        return usuarioService.encontrarPorNombreUsuario(username);
    }
    @GetMapping("/usuarios/favorites/username={username}")
    public Collection<Carta> encontrarFavoritos(@PathVariable("username") String username) {
        Usuarios usuario = usuarioService.encontrarPorNombreUsuario(username);
        return usuario.getFavorites();
    }
    @GetMapping("/vendedores")
    public ResponseEntity<List<Usuarios>> encontrarTodosLosVendedores() {
        List<Usuarios> vendedores = usuarioService.encontrarTodoslosUsuarios();
        List<Usuarios> vendedoresFinal = new ArrayList<>();
        for (Usuarios vendedor : vendedores) {
            for(Perfil perfil : vendedor.getPerfiles()) {
                if(perfil.getId() == 4) {
                    vendedoresFinal.add(vendedor);
                }
            }
        }
        return ResponseEntity.ok().body(vendedoresFinal);
    }
}
