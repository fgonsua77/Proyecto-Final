package nando.proyect.entornoServidor.service.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nando.proyect.entornoServidor.model.Direccion;
import nando.proyect.entornoServidor.repository.DireccionRepository;
import nando.proyect.entornoServidor.service.IServiceDireccion;
@Service
public class ServiceDireccionImpl implements IServiceDireccion {
    @Autowired
    private DireccionRepository direccionRepository;

    @Override
    public void borrarDireccion(Direccion direccion) {
        // TODO Auto-generated method stub
        direccionRepository.delete(direccion);
        
    }

    @Override
    public List<Direccion> encontrarTodas() {
        // TODO Auto-generated method stub
        return direccionRepository.findAll();
    }

    @Override
    public Direccion encontrarUnaDireccionPorId(Integer id) {
        // TODO Auto-generated method stub
        return direccionRepository.findById(id).get();
    }

    @Override
    public void guardarDireccion(Direccion direccion) {
        // TODO Auto-generated method stub
        direccionRepository.save(direccion);
        
    }
    
}
