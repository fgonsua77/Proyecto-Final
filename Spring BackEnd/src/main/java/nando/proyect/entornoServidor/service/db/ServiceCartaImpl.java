package nando.proyect.entornoServidor.service.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public Page<Carta> encontrarTodasPage(Pageable page){
        return cartaRepository.findAll(page);
    }
    public void guardarCarta(Carta carta) {
        cartaRepository.save(carta);
    }
    @Override
    public Carta encontrarUnaCartaPorId(Integer id) {
        return cartaRepository.findById(id).get();
    }
    @Override
    public List<Carta> encontrarCartasPorLineadeNombre(String nombre) {
        // TODO Auto-generated method stub
        return cartaRepository.findByNameContaining(nombre);
    }
    @Override
    public List<Carta> encontrarCartasDestacadas() {
        // TODO Auto-generated method stub
        return cartaRepository.findByHighlighted(true);
    }
}
