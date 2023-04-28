using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MainMenu : MonoBehaviour
{
    public void PlayMain(){
        SceneManager.LoadScene(1);
    }

    public void Exit(){
        Debug.Log("Salir...");
        Application.Quit();
    }
}
