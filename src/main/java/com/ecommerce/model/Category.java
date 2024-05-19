package com.ecommerce.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Size(max=50)
    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="parent_category_id")
    private Category parentCategory;
    
    private int level;

    public Category(){
        
    }

    public Category(Long id,@NotNull @Size(max = 50)String name,Category parentCategory,int level){
        this.id=id;
        this.name=name;
        this.parentCategory=parentCategory;
        this.level=level;
    }

    /**
     * @return Long return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return String return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return Category return the parenCategory
     */
    public Category getParenCategory() {
        return parentCategory;
    }

    /**
     * @param parenCategory the parenCategory to set
     */
    public void setParenCategory(Category parenCategory) {
        this.parentCategory = parenCategory;
    }

    /**
     * @return int return the level
     */
    public int getLevel() {
        return level;
    }

    /**
     * @param level the level to set
     */
    public void setLevel(int level) {
        this.level = level;
    }

}
