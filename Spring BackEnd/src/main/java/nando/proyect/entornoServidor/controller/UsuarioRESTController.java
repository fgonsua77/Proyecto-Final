package nando.proyect.entornoServidor.controller;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import nando.proyect.entornoServidor.model.Perfil;
import nando.proyect.entornoServidor.model.Usuarios;
import nando.proyect.entornoServidor.repository.PerfilRepository;
import nando.proyect.entornoServidor.service.IServiceUsuario;

@RestController @RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/apiuser")

public class UsuarioRESTController {
    @Autowired
    private IServiceUsuario usuarioService;
    @Autowired
    private PerfilRepository perfilRepository;
    @Autowired
    private PasswordEncoder pwEncoder;
    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody Usuarios usuario) {
        UserDetails usuarioEncontrado = usuarioService.loadUserByUsername(usuario.getNombre());
        if (usuarioEncontrado == null) {
            return ResponseEntity.notFound().build();
        }
        if (!usuarioEncontrado.getPassword().equals(usuario.getPassword())) {
            return ResponseEntity.status(HttpServletResponse.SC_UNAUTHORIZED).build();
        }
        String token = JWT.create().withSubject(usuario.getNombre()).sign(Algorithm.HMAC256(usuario.getPassword()));
        return ResponseEntity.ok(token);
    }
    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuarios>> encontrarTodas() {
        return ResponseEntity.ok().body(usuarioService.encontrarTodoslosUsuarios());
    }

    @PostMapping("/signup")
    public ResponseEntity<Usuarios> guardarUsuario(@ModelAttribute Usuarios user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/apiuser/usuarios/{id}").toUriString());
        Collection<Perfil> perfiles = new ArrayList<>();
        perfiles.add(perfilRepository.findByPerfil("USUARIO"));
        user.setFechaRegistro(new Date());
        user.setPerfiles(perfiles);
        user.setPassword(pwEncoder.encode(user.getPassword()));
        user.setEstatus(1);
        return ResponseEntity.created(uri).body(usuarioService.guardarUsuario(user));
    }
    @PostMapping("/addRoleToUser")
    public ResponseEntity<Usuarios> añadirPerfilAUsuario(@RequestBody PerfilForm form) {
        usuarioService.añadirPerfilAUsuario(form.getUsername(), form.getPerfilname());
        return ResponseEntity.ok().build();
    }
    @PostMapping("/tokenRefresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws StreamWriteException, DatabindException, IOException {
        String authorizationHeader = request.getHeader("Authorization");
        if(authorizationHeader == null || authorizationHeader.startsWith("Bearer ")) {
            try{
                String token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decoded = verifier.verify(token);
                String username = decoded.getSubject();
                String[] perfiles = decoded.getClaim("perfiles").asArray(String.class);
                Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
                Arrays.stream(perfiles).forEach(perfil -> {
                    authorities.add(new SimpleGrantedAuthority(perfil));
                });
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, null, authorities);
                SecurityContextHolder.getContext().setAuthentication(authToken);
                }catch(Exception e){
                    response.setHeader("error", e.getMessage());
                    response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                    Map<String, String> error = new HashMap<>();
                    error.put("error", e.getMessage());
                    response.setContentType("application/json");
                    new ObjectMapper().writeValue(response.getOutputStream(), error);
                }
            }else{
                    throw new RuntimeException("No hay token de recarga");
            }
    }

    @Data
    public static class PerfilForm {
        private String username;
        private String perfilname;
    }
}
