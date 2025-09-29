package tn.esprit.examen.nomPrenomClasseExamen.aspects;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Slf4j
@Component
@Aspect
public class PerformanceAspect {
    @Around("execution(* tn.esprit.examen.nomPrenomClasseExamen.services.*.*(..))")
    public Object profile(ProceedingJoinPoint pjp) throws Throwable {
        long start = System.currentTimeMillis();
        Object obj = pjp.proceed();
        long elapsedTime = System.currentTimeMillis() - start;
        log.info("Method execution time: " + elapsedTime + " milliseconds.");
        return obj;
    }

    @Around("execution(* tn.esprit.examen.nomPrenomClasseExamen.services.*.ajouter*(..))")
    public Object profileAjouterMethods(ProceedingJoinPoint pjp) throws Throwable {
        // Date système avant l'exécution
        LocalDateTime startTime = LocalDateTime.now();
        long startMillis = System.currentTimeMillis();

        // Exécution de la méthode
        Object obj = pjp.proceed();

        // Calcul des métriques
        long elapsedTime = System.currentTimeMillis() - startMillis;
        LocalDateTime endTime = LocalDateTime.now();

        // Log des informations
        log.info("\n[Performance Metrics] - Method: {}.{}()\n" +
                        "Start Time: {}\n" +
                        "End Time: {}\n" +
                        "Execution Time: {} ms\n" +
                        "--------------------------------------------------",
                pjp.getTarget().getClass().getSimpleName(),
                pjp.getSignature().getName(),
                startTime,
                endTime,
                elapsedTime);

        return obj;
    }

}
