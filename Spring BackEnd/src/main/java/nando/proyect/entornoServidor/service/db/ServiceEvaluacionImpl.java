package nando.proyect.entornoServidor.service.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nando.proyect.entornoServidor.model.Evaluacion;
import nando.proyect.entornoServidor.repository.CompraRepository;
import nando.proyect.entornoServidor.repository.EvaluacionRepository;
import nando.proyect.entornoServidor.repository.VentaRepository;
import nando.proyect.entornoServidor.service.IServiceEvaluacion;
@Service
public class ServiceEvaluacionImpl implements IServiceEvaluacion {
    @Autowired
    private EvaluacionRepository evaluacionRepository;
    @Autowired
    private CompraRepository compraRepository;
    @Autowired
    private VentaRepository ventaRepository;
    @Override
    public void borrarEvaluacion(Evaluacion evaluacion) {
        // TODO Auto-generated method stub
        evaluacionRepository.delete(evaluacion);
    }

    @Override
    public List<Evaluacion> encontrarTodas() {
        // TODO Auto-generated method stub
        return evaluacionRepository.findAll();
    }

    @Override
    public Evaluacion encontrarUnaEvaluacionPorId(Integer id) {
        // TODO Auto-generated method stub
        return evaluacionRepository.findById(id).get();
    }

    @Override
    public void guardarEvaluacion(Evaluacion evaluacion) {
        // TODO Auto-generated method stub
        evaluacionRepository.save(evaluacion);
        
    }
    
    
}
