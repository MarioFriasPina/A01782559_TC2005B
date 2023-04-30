using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

/*
Andrea Alexandra Barrón Córdova
Mario Ignacio Frías Piña
Oswaldo Ilhuicatzi Mendizábal
*/
public class MainMenu : MonoBehaviour
{
    public void PlayMain(){
        //La escena principal tiene el índice 1, por lo que se carga esa escena con el botón de jugar
        SceneManager.LoadScene(1);
    }

    public void Exit(){
        Debug.Log("Salir...");
        Application.Quit();
    }
}
