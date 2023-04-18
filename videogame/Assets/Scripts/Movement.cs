using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] float limit;

    Vector3 move;
    int     points = 0;

    // Start is called before the first frame update
    void Start()
    {
        
    }

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
    }
}
