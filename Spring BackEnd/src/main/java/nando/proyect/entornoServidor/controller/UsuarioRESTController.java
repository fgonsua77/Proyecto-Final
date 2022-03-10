package nando.proyect.entornoServidor.controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import nando.proyect.entornoServidor.model.Usuarios;
import nando.proyect.entornoServidor.service.IServiceUsuario;

@RestController @RequiredArgsConstructor
@RequestMapping("/apiuser")
public class UsuarioRESTController {
    private IServiceUsuario usuarioService;

    @GetMapping("/users")
    public ResponseEntity<List<Usuarios>> encontrarTodas() {
        return ResponseEntity.ok().body(usuarioService.encontrarTodoslosUsuarios());
    }

    @PostMapping("/save")
    public ResponseEntity<Usuarios> guardarUsuario(@RequestBody Usuarios user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/apiuser/usuarios/{id}").toUriString());
        return ResponseEntity.created(uri).body(usuarioService.guardarUsuario(user));
    }
    @PostMapping("/addRoleToUser")
    public ResponseEntity<Usuarios> añadirPerfilAUsuario(@RequestBody PerfilForm form) {
        usuarioService.añadirPerfilAUsuario(form.getUsername(), form.getPerfilname());
        return ResponseEntity.ok().build();
    }
    @PostMapping("/addRoleToUser")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) {
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
                    logger.info("Error en el token: "+e.getMessage());
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
