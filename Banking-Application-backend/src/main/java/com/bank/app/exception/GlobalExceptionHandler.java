package com.bank.app.exception;

import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;


@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public final ResponseEntity<ExceptionDetails> handleUserNotFoundException(UserNotFoundException ex, WebRequest request) throws Exception{
        ExceptionDetails details = new ExceptionDetails(LocalDateTime.now(), ex.getMessage(), request.getDescription(false));
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(details);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public final ResponseEntity<ExceptionDetails> handleBadCredentialsException(BadCredentialsException ex, WebRequest request) throws Exception{
        ExceptionDetails details = new ExceptionDetails(LocalDateTime.now(), ex.getMessage(), request.getDescription(false));
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(details);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex,
            HttpHeaders headers,
            HttpStatusCode status,
            WebRequest request)
    {

        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error->{
            String fieldName = ((FieldError)error).getField();
            String message = error.getDefaultMessage();
            errors.put(fieldName, message);
        });

        return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public final ResponseEntity<ExceptionDetails> handleAccessDeniedException(AccessDeniedException ex, WebRequest request) throws Exception{
        // We are setting request.getDescription(false) because we don't want all description of exception we just want
        // url of the rest api
        ExceptionDetails details = new ExceptionDetails(LocalDateTime.now(), ex.getMessage(), request.getDescription(false));
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(details);
    }

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ExceptionDetails> handleAllException(Exception ex, WebRequest request) throws Exception{
        ExceptionDetails details = new ExceptionDetails(LocalDateTime.now(), ex.getMessage(), request.getDescription(true));
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(details);
    }


}

