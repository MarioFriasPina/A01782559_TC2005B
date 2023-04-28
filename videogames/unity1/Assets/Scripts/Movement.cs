using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Movement : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] float limit;
    Vector3 move;

    int     points = 0;
    [SerializeField] TMP_Text score;

    [SerializeField] ParticleSystem part;

    // Update is called once per frame
    void Update()
    {
        move.x = Input.GetAxis("Horizontal");

        if (transform.position.x > -limit && move.x < 0)
            transform.Translate(move * speed * Time.deltaTime);
        else if (transform.position.x < limit && move.x > 0)
            transform.Translate(move * speed * Time.deltaTime);
    }


    void OnTriggerEnter2D(Collider2D col)
    {
        points += 1;
        score.text = "Score: " + points;
        part.Emit(5);
    }
}
