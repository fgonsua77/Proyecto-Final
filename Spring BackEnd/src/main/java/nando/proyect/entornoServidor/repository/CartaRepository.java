package nando.proyect.entornoServidor.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import nando.proyect.entornoServidor.model.Carta;

public interface CartaRepository extends JpaRepository<Carta, Integer> {
    List<Carta> findAllByExpansion(Integer expansion);
    List<Carta> findByNombreContaining(String parteNombre);
    List<Carta> findByCodigo(String codigo);
    List<Carta> findByKeywords(String keywords);
    List<Carta> findByPrecio(String precio);
    List<Carta> findByReprint(String reprint);
    List<Carta> findByTexto(String texto);
    List<Carta> findByDestacado(Boolean destacado);

}