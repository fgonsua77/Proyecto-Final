package nando.proyect.entornoServidor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Evaluacion;
import nando.proyect.entornoServidor.service.IServiceEvaluacion;

@RestController
@RequestMapping("/evaluation")
public class EvaluacionRESTController {
    @Autowired
    private IServiceEvaluacion evaluacionService;
    @GetMapping("/evaluations")
    public List<Evaluacion> encontrarTodas() {
        return evaluacionService.encontrarTodas();
    }
}
