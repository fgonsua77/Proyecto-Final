package nando.proyect.entornoServidor.service.db;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import nando.proyect.entornoServidor.model.Carta;
import nando.proyect.entornoServidor.model.Expansion;
import nando.proyect.entornoServidor.model.Juego;
import nando.proyect.entornoServidor.repository.CartaRepository;
import nando.proyect.entornoServidor.repository.ExpansionRepository;
import nando.proyect.entornoServidor.repository.JuegoRepository;
import nando.proyect.entornoServidor.service.IServiceCarta;
@Service
public class ServiceCartaImpl implements IServiceCarta {
    @Autowired
    private CartaRepository cartaRepository;
    @Autowired
    private JuegoRepository juegoRepository;
    @Autowired
    private ExpansionRepository expansionRepository;
    
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
        return cartaRepository.findByNombreContaining(nombre);
    }
    @Override
    public List<Carta> encontrarCartasPorJuego(String juego) {
        Juego juegoAEncontrar = juegoRepository.findByNombre(juego);
        List<Expansion> expansionesDelJuego = expansionRepository.findAllByJuego(juegoAEncontrar);
        List<Carta> cartasAEnviar = new LinkedList<Carta>();
        for (Expansion expansion : expansionesDelJuego) {
            List<Carta> cartasDeLaExpansion = cartaRepository.findAllByExpansion(expansion.id);
            cartasAEnviar.addAll(cartasDeLaExpansion);
        }
        return cartasAEnviar;
    }
    @Override
    public List<Carta> encontrarCartasDestacadas() {
        // TODO Auto-generated method stub
        return cartaRepository.findByDestacado(true);
    }
}
