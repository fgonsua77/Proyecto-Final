package nando.proyect.entornoServidor.service.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nando.proyect.entornoServidor.model.Carta;
import nando.proyect.entornoServidor.repository.CartaRepository;
import nando.proyect.entornoServidor.service.IServiceCarta;
@Service
public class ServiceCartaImpl implements IServiceCarta {
    @Autowired
    private CartaRepository cartaRepository;
    
    public List<Carta> encontrarTodas() {
        return cartaRepository.findAll();
    }
    public void guardarCarta(Carta carta) {
        cartaRepository.save(carta);
    }
    @Override
    public Carta encontrarUnaCartaPorId(Integer id) {
        return cartaRepository.findById(id).get();
    }
}
