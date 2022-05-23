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
    @Override
    public List<Expansion> encontrarExpansionesPorIddeJuego(Integer idJuego) {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public Expansion encontrarUnaExpansionPorId(Integer id) {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public void guardarExpansion(Expansion expansion) {
        // TODO Auto-generated method stub
        
    }
    
}
