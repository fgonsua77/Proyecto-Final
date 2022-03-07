package nando.proyect.entornoServidor.service.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nando.proyect.entornoServidor.model.Expansion;
import nando.proyect.entornoServidor.repository.ExpansionRepository;
import nando.proyect.entornoServidor.service.IServiceExpansion;
@Service
public class ServiceExpansionImpl implements IServiceExpansion  {
    @Autowired
    private ExpansionRepository expansionRepository;
    @Override
    public List<Expansion> encontrarTodasLasExpansiones() {
        return expansionRepository.findAll();
    }
    
}
