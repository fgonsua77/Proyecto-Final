package nando.proyect.entornoServidor.service.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nando.proyect.entornoServidor.model.Juego;
import nando.proyect.entornoServidor.repository.JuegoRepository;
import nando.proyect.entornoServidor.service.IServiceJuego;
@Service
public class ServiceJuegoImpl implements IServiceJuego{
    @Autowired
    private JuegoRepository juegoRepository;

    @Override
    public void borrarJuego(Juego juego) {
        // TODO Auto-generated method stub
        juegoRepository.delete(juego);
    }

    @Override
    public List<Juego> encontrarTodas() {
        // TODO Auto-generated method stub
        return juegoRepository.findAll();
    }

    @Override
    public Juego encontrarUnaJuegoPorId(Integer id) {
        // TODO Auto-generated method stub
        return juegoRepository.findById(id).get();
    }

    @Override
    public void guardarJuego(Juego juego) {
        // TODO Auto-generated method stub
        juegoRepository.save(juego);
    }
    @Override
    public Juego encontrarJuegoPorNombre(String nombre) {
        // TODO Auto-generated method stub
        return juegoRepository.findByName(nombre);
    }
    
}
