using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using TMPro;

public class Puntaje : MonoBehaviour
{
    [Tooltip("Cuadro de texto de puntos")]
    [SerializeField] TMP_Text puntos_text;

    // Start is called before the first frame update
    void Start()
    {
        string path = "Assets/Max_scores.txt";
        int max_score = -1;
        string line = "0";

        StreamReader sr = new StreamReader(path);
        for (int i = 0; !sr.EndOfStream; i++) {
            line = sr.ReadLine ();
            if (max_score < int.Parse(line))
                max_score = int.Parse(line);
        }
        sr.Close();

        puntos_text.text = "Puntaje: " + int.Parse(line) + "\nPuntaje Maximo" + max_score;
    }
}
