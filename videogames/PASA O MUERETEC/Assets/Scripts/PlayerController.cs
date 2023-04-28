using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class PlayerController : MonoBehaviour
{
    [Header("Referencias a prefabs")]
    [Tooltip("Prefab del objeto a disparar")]
    [SerializeField] GameObject ammo;
    [Tooltip("Posicion inicial del objeto al disparar")]
    [SerializeField] GameObject gun;
    [Tooltip("Creador de Enemigos")]
    [SerializeField] EnemyMaker maker;
    
    [Header("Caracteristicas de objetos")]
    [Tooltip("Velocidad inicial del objeto al disparar")]
    [SerializeField] float init_velo;

    [Tooltip("Cuadro de texto de vida")]
    [SerializeField] TMP_Text vida;
    [Tooltip("Cuadro de texto de puntos")]
    [SerializeField] TMP_Text puntos_text;

    [Tooltip("Controlador de Puntos")]
    public int puntos;

    public int health;

    // Start is called before the first frame update
    void Start()
    {
        puntos = 0;
        vida.text = "Vida: " + health;
    }

    // Update is called once per frame
    void Update()
    {
        GameObject nuevaBala;
        Vector3 pos = Camera.main.WorldToScreenPoint(transform.position);
        Vector3 dir = Input.mousePosition - pos;

        //Rotar el objeto para que apunte al mouse

        float angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
        transform.rotation = Quaternion.AngleAxis(angle - 90f, Vector3.forward);


        if (Input.GetMouseButtonDown(0))
        {
            nuevaBala = Instantiate(ammo, transform.position, transform.rotation);
            nuevaBala.GetComponent<Rigidbody2D>().velocity = dir * init_velo;
        }

        puntos_text.text = "Puntos: " + puntos;
    }

    //Colision con un Enemigo
    void OnTriggerEnter2D(Collider2D col)
    {
        if (col.tag == "Enemy")
        {
            health--;
            vida.text = "Vida: " + health;
            Destroy(col.gameObject);

            if (health <= 0) {
                maker.stop();
            }
        }
    }
}
