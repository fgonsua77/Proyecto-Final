package nando.proyect.entornoServidor.service.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nando.proyect.entornoServidor.model.Envio;
import nando.proyect.entornoServidor.repository.EnvioRepository;
import nando.proyect.entornoServidor.service.IServiceEnvio;
@Service
public class ServiceEnvioImpl implements IServiceEnvio{
    @Autowired
    private EnvioRepository envioRepository;
    @Override
    public void borrarEnvio(Envio envio) {
        envioRepository.delete(envio);
        
    }

    @Override
    public List<Envio> encontrarTodas() {
        return envioRepository.findAll();
    }

    @Override
    public Envio encontrarUnaEnvioPorId(Integer id) {
        return envioRepository.findById(id).get();
    }

    @Override
    public void guardarEnvio(Envio envio) {
        envioRepository.save(envio);
        
    }

    
    
}
