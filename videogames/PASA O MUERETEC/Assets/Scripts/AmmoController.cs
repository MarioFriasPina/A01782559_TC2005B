using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class AmmoController : MonoBehaviour
{
    [Header("Caracteristicas del objeto")]
    [Tooltip("Distancia maxima que se puede llegar en x")]
    [SerializeField] float max_x;
    [Tooltip("Distancia maxima que se puede llegar en y")]
    [SerializeField] float max_y;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (Mathf.Abs(transform.position.x) > max_x || Mathf.Abs(transform.position.y) > max_y)
        {
            Destroy(gameObject);
        }
    }

    //Si un objeto entra a su colision
    void OnTriggerEnter2D(Collider2D col)
    {
        if (col.tag == "Enemy")
        {
            Destroy(col.gameObject);
            GameObject.FindFirstObjectByType<PlayerController>().puntos++;


            //Hacer mas rapidas las balas
            GameObject.FindFirstObjectByType<EnemyController>().speed += 0.1f;

            //Hacer mas rapido el tiempo entre enemigos
            GameObject.FindFirstObjectByType<EnemyMaker>().time_between *= 0.99f;
        }
    }
}
