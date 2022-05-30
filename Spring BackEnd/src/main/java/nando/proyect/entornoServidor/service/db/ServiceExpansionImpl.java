package nando.proyect.entornoServidor.service.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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
    @Override
    public Expansion encontrarUnaExpansionPorId(Integer id) {
        // TODO Auto-generated method stub
        return expansionRepository.findById(id).get();
    }
    @Override
    public void guardarExpansion(Expansion expansion) {
        expansionRepository.save(expansion);
        
    }
    @Override
    public List<Expansion> encontrarExpansionesPorFechaDeSalida(Sort sort) {
        return expansionRepository.findAll(sort);
    }
    
    
}
