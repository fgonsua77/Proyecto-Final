package nando.proyect.entornoServidor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import nando.proyect.entornoServidor.model.Evaluacion;
import nando.proyect.entornoServidor.service.IServiceEvaluacion;

@RestController
@RequestMapping("/evaluation")
@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT})
public class EvaluacionRESTController {
    @Autowired
    private IServiceEvaluacion evaluacionService;
    @GetMapping("/evaluations")
    public List<Evaluacion> encontrarTodas() {
        return evaluacionService.encontrarTodas();
    }
}
