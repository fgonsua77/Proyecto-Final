package nando.proyect.entornoServidor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Envio;
import nando.proyect.entornoServidor.service.IServiceEnvio;

@RestController
@RequestMapping("/shipments")
public class EnviosRestController {
    @Autowired
    private IServiceEnvio envioService;

    @GetMapping("/")
    public List<Envio> getAll() {
        return envioService.encontrarTodas();
    }

    @GetMapping("/{id}")
    public Envio getById(@PathVariable("id") Integer id) {
        return envioService.encontrarUnaEnvioPorId(id);
    }

    @GetMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        envioService.borrarEnvio(envioService.encontrarUnaEnvioPorId(id));
    }

    @GetMapping("/save")
    public void save(@RequestBody Envio envio) {
        envioService.guardarEnvio(envio);
    }

}
