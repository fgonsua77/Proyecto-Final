package nando.proyect.entornoServidor;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EntornoServidorApplication {

	public static void main(String[] args) {
		SpringApplication.run(EntornoServidorApplication.class, args);
	}
	CommandLineRunner runner = new CommandLineRunner() {
		@Override
		public void run(String... arg0) throws Exception {
			System.out.println("Hola Mundo");
		}
	};
}
